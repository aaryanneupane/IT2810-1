import React from "react";

const FavouritePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to Your Website</h1>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            ex vitae justo tincidunt euismod a nec nunc. Fusce congue lectus vel
            tortor volutpat, a tempus quam convallis. Nullam facilisis, metus a
            fringilla rhoncus, libero arcu tristique ipsum, nec egestas lorem
            tortor nec ligula.
          </p>
        </section>
        <section>
          <h2>Our Services</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            Feel free to reach out to us at{" "}
            <a href="mailto:contact@example.com">contact@example.com</a>.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
      </footer>
    </div>
  );
};

export default FavouritePage;
