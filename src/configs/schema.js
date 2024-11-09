import { json, pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";

export const CarListing=pgTable('carlisting',{
  id:serial('id').primaryKey(),
  listingTitle:varchar('listingTitle').notNull(),
  tagline:varchar('tagline'),
  originalPrice:varchar('originalPrice'),
  sellingPrice:varchar('sellingPrice'),
  category:varchar('category'),
  condition:varchar('condition'),
  make:varchar('make'),
  model:varchar('model'),
  year:varchar('year'),
  driveType:varchar('driveType'),
  transmission:varchar('transmission'),
  fuelType:varchar('fuelType'),
  mileage:varchar('mileage'),
  engineSize:varchar('engineSize'),
  cylinder:varchar('cylinder'),
  color:varchar('color'),
  door:varchar('door'),
  vin:varchar('vin'),
  offerType:varchar('offerType'),
  listingDescription:varchar('listingDescription'),
  features:json('features')
})

export const CarImages=pgTable('carImages',{
  id:serial('id').primaryKey(),
  imageUrl:varchar('imageUrl').notNull(),
  carListingId:integer('carListingId').notNull().references(()=>CarListing.id)
})