import MainNavigator from "../components/MainNavigator";

function ErrorPage() {
  return (
    <>
      <MainNavigator />
      <main>
        <h1>An error occurred!</h1>
        <p>Cound not find this page </p>
      </main>
    </>
  );
}

export default ErrorPage;
