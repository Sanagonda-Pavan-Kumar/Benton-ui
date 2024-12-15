import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../config/constants';

const routeBreadcrumbMap: { [key: string]: string } = {
    [ROUTES.HOME]: '/',
    [ROUTES.PROPERTIES]: 'Properties',
    [ROUTES.ADD_PROPERTY]: 'Add Property',
    [ROUTES.PROPERTY_DETAILS]: 'Property Details'
};

export const Breadcrumbs: React.FC = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(Boolean);
    const breadcrumbTrail = paths.map((_, index) => {
        const currentPath = `/${paths.slice(0, index + 1).join('/')}`;
        let label = routeBreadcrumbMap[currentPath] || '';
        if (currentPath.startsWith('/property/')) {
            label = 'Property Details';
        } else if (currentPath === '/properties') {
            label = 'Properties';
        }

        return {
            path: currentPath,
            label: label || 'Unknown',
        };
    });

    return (
        <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4 ">
            <ol className="flex space-x-2">
                {breadcrumbTrail.map((breadcrumb, index) => (
                    <li key={breadcrumb.path} className="flex items-center">
                        {index !== breadcrumbTrail.length - 1 ? (
                            <Link to={breadcrumb.path} className="hover:underline text-[#eb6e34]">
                                {breadcrumb.label}
                            </Link>
                        ) : (
                            <span className="text-white ">{breadcrumb.label}</span>
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
