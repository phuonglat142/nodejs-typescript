import { Pool } from "pg";

// Tạo connection pool cho PostgreSQL
const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: 20, // Số lượng connection tối đa trong pool
  idleTimeoutMillis: 30000, // Thời gian timeout cho idle connection
  connectionTimeoutMillis: 2000, // Thời gian timeout khi connect
});

// Kiểm tra kết nối
export const connectDB = async (): Promise<void> => {
  try {
    const client = await pool.connect();
    console.log("✅ PostgreSQL connected successfully!");
    client.release();
  } catch (error) {
    console.error("❌ PostgreSQL connection error:", error);
    process.exit(1);
  }
};

// Export pool để sử dụng trong các module khác
export default pool;
