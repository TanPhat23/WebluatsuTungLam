type Props = {
  message: string;
};

const NotFound = ({ message }: Props) => {
  return (
    <div className="flex flex-col gap-8 mt-16 items-center justify-center">
      <h1 className="font-extrabold">404</h1>
      <p className="font-bold">Not Found</p>
      <h1 className="text-2xl font-bold">{message}</h1>
    </div>
  );
};

export default NotFound;
