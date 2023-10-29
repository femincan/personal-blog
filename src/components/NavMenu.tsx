import { For, createSignal } from 'solid-js';

const NavLink = (props: { href: string; children: string }) => {
  return (
    <li class="text-base font-medium">
      <a href={props.href}>{props.children}</a>
    </li>
  );
};

const NavMenu = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  const navLinks = [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '/blog',
      text: 'Blog',
    },
    {
      href: '/about',
      text: 'About',
    },
  ];

  return (
    <nav>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        class="btn btn-circle btn-secondary swap swap-rotate btn-sm sm:hidden"
        classList={{ 'swap-active': isOpen() }}
      >
        <svg
          class="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"></path>
        </svg>
        <svg
          class="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"></polygon>
        </svg>
      </button>
      <ul
        class="menu menu-vertical absolute right-0 top-full gap-1 rounded-lg bg-black text-white sm:menu-horizontal sm:static sm:flex sm:bg-transparent"
        classList={{ hidden: !isOpen() }}
      >
        <For each={navLinks}>
          {(navLink) => <NavLink href={navLink.href}>{navLink.text}</NavLink>}
        </For>
      </ul>
    </nav>
  );
};

export default NavMenu;
