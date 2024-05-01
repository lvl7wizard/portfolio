import styles from "./LoadingScreen.module.css"

const LoadingScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loadingSpinner}></div>
      <h1 className={styles.loadingText}>Loading...</h1>
    </div>
  );
};

export default LoadingScreen;
