/** @type { import("drizzle-kit").Config } */
export default({
  dialect: "postgresql",
  schema: "src/configs/schema.js", 
  dbCredentials: {
    url: "postgresql://christdb_owner:NovCrK9Ljh2s@ep-dry-frog-a1kh7k65.ap-southeast-1.aws.neon.tech/car-trademarket?sslmode=require",
  },
});
