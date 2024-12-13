export const ROUTES = {
  HOME: '/',
  PROPERTIES: '/properties',
  ADD_PROPERTY: '/properties/add',
  PROPERTY_DETAILS: '/property/:id'
} as const;

export const TABLE_PAGE_SIZES = [10, 20, 30, 40, 50] as const;