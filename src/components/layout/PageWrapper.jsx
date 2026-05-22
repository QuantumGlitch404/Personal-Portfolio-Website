import Navigation from './Navigation';
import Footer from './Footer';

export default function PageWrapper({ children }) {
  return (
    <>
      <Navigation />
      {/* 
        On desktop, the navigation sidebar takes up some space on the left.
        We can either push the main content over or let the container handle it.
        Since we have a centered container and max-width, and the nav is fixed, 
        we'll just wrap the content here.
      */}
      <main className="content-wrapper">
        {children}
      </main>
      <Footer />
    </>
  );
}
