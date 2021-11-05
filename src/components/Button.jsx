const Button = ({ url, icon, text }) => {
  return (
    <a
      className="flex items-center justify-center px-10 py-3 text-xl duration-300 bg-transparent bg-blue-500 border-2 border-transparent rounded-lg cursor-pointer hover:border-white bg-gradient"
      href={url}
      target="_blank"
    >
      <div className="mr-3 text-3xl">{icon}</div>
      {text}
    </a>
  );
};

export default Button;
