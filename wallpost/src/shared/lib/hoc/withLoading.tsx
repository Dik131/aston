export function withLoading<P extends object>(
  Component: React.ComponentType<P>
) {
  return function WithLoadingComponent({ isLoading, ...props }: P & { isLoading: boolean }) {
    if (isLoading) {
      return <div>Загрузка...</div>;
    }
    return <Component {...(props as P)} />;
  };
}
