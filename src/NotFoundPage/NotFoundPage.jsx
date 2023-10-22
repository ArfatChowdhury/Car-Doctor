// NotFoundPage.js


const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <div className="w-16 h-16 bg-blue-500 rounded-full animate-spin my-4"></div>
      <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;

