import { defineTable, defineSchema } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    username: v.string(),
    password: v.string(),
    role: v.string(),
  }),

  // Table for Teamv
  //   teams: defineTable({
  //     revtaurantId: v.string(),
  //     role: v.string()
  //   }),

  // Table for Restaurants
  restaurants: defineTable({
    name: v.string(),
    address: v.string(),
    contactDetails: v.string(),
    restaurantId: v.id("users"),
  }),

  // Table for Menus
  menus: defineTable({
    restaurantId: v.id("restaurants"),
    name: v.string(),
  }),

  menu_category: defineTable({
    menuId: v.id("menus"),
    name: v.string(),
  }),

  // Table for Menu Items
  menu_items: defineTable({
    id: v.id("menu_category"),
    menuId: v.string(),
    name: v.string(),
  }),

  products: defineTable({
    categoryId: v.id("menu_category"),
    name: v.string(),
    description: v.string(),
    price: v.number(),
    
    customizableOption: v.string(),
  }),

  // Table for Orders
  orders: defineTable({
    restaurantId: v.id("restaurants"),
    customerId: v.id("customers"),
    orderNumber: v.string(),
    status: v.string(),
  }),

  // Table for Order Detailv
  order_details: defineTable({
    orderId: v.id("orders"),
    productId: v.id("products"),
    quantity: v.number(),
    options: v.string(),
  }),

  // Table for Cuvtomerv
  customers: defineTable({
    name: v.string(),
    phoneNumber: v.number(),  
    contactDetails: v.string(),
  }),

  kds: defineTable({
    orderId: v.id("orders"),
    details: v.string(),
  }),

  // Table for Point of vale (POv)
  pos: defineTable({
    orderId: v.id("orders"),
    details: v.string(),
  }),
});
