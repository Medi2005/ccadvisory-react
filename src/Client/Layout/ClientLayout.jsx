import {Outlet} from "react-router-dom";
import Header from '../Components/Header';
import Bare from '../Components/Bare';
import '../../App';

const ClientLayout = () => {
  return (
    <>
      <Header />
      <main className="relative w-screen h-91 flex">
        <section className="absolute float-left w-52 h-full bg-SFPETROL">
          <Bare/>
        </section>
        <section className="grow pl-52 h-full">
        <Outlet />
        </section>
      </main>
    </>
  );
}

export default ClientLayout;
