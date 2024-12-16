import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../config/constants";

// Map of route paths to their corresponding breadcrumb labels
const routeBreadcrumbMap: { [key: string]: string } = {
  [ROUTES.HOME]: "Home",
  [ROUTES.PROPERTIES]: "Properties",
  [ROUTES.ADD_PROPERTY]: "Add Property",
  [ROUTES.PROPERTY_DETAILS]: "Property Details",
};

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  // Build breadcrumb trail
  const breadcrumbTrail = [
    { path: ROUTES.HOME, label: "Home" }, // Add "Home" as the first breadcrumb
    ...paths
      .map((_, index) => {
        const currentPath = `/${paths.slice(0, index + 1).join("/")}`;

        // Handle dynamic route like /property/:id
        if (currentPath.startsWith("/property/")) {
          return [
            { path: ROUTES.PROPERTIES, label: "Properties" },
            { path: currentPath, label: "Property Details" },
          ];
        }

        // Handle static routes
        const label = routeBreadcrumbMap[currentPath];
        return label
          ? { path: currentPath, label } // Valid breadcrumb
          : null; // Skip invalid paths
      })
      .flat()
      .filter(Boolean), // Remove null values
  ];

  return (
    <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4">
      <ol className="flex space-x-2">
        {breadcrumbTrail.map((breadcrumb, index) => (
          <li key={breadcrumb.path} className="flex items-center">
            {index !== breadcrumbTrail.length - 1 ? (
              <Link
                to={breadcrumb.path}
                className="hover:underline text-[#eb6e34]"
              >
                {breadcrumb.label}
              </Link>
            ) : (
              <span className="text-white">{breadcrumb.label}</span>
            )}
            {index !== breadcrumbTrail.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
