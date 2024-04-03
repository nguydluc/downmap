const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 mt-14">
      <p className="text-center">
        © {currentYear} DownMap. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
