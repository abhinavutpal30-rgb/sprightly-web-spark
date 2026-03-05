const Footer = () => {
  return (
    <footer className="py-6 px-6 bg-foreground border-t border-background/10 text-background/40 text-center text-[10px] space-y-1">
      <p>RERA: PRM/KA/RERA/1251/310/PR/040226/006450 | T&C Apply | CGI Artist's Impression</p>
      <p>© {new Date().getFullYear()} Assetz Property Group. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
