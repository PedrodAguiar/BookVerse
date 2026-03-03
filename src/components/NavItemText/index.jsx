const opcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

const NavItemText = () => (
  <>
    {opcoes.map((opcao) => (
      <li
        key={opcao}
        className="flex justify-center items-center text-center cursor-pointer min-w-30 text-base px-1 h-full hover:text-gray-500 transition-colors"
      >
        {opcao}
      </li>
    ))}
  </>
);

export default NavItemText;
