// Halaman publik — bisa diakses siapa saja
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { isLoggedIn, user } = useAuth();

  return (
    <div className="max-w-205 my-10 mx-auto px-5">
      <h1 className="mt-0 text-3xl font-bold">Selamat Datang 👋</h1>
      <p className="mt-4">
        Ini contoh aplikasi React + Laravel dengan Autentikasi, Token, dan
        Role-Based Access Control.
      </p>

      {isLoggedIn ? (
        <p>
          Kamu login sebagai <strong>{user?.name}</strong>. Buka{" "}
          <Link to="/dashboard">Dashboard</Link>.
        </p>
      ) : (
        <p>
          Silakan <Link to="/login">Login</Link> atau{" "}
          <Link to="/register">Daftar</Link> dulu.
        </p>
      )}
    </div>
  );
}

export default Home;
