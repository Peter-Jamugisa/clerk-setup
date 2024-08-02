import { Button } from "@/components/ui/button";
import { Protect, SignInButton } from "@clerk/nextjs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Head>
        <title>One Experience</title>
        <meta name="description" content="the gosple" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white">
        <Header />
        <HeroSection />
        <AboutUs />
        <Footer />
      </main>
    </div>
  );
};

const Header = () => (
  <header className="bg-gray-100 py-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-xl font-bold">One Experience Radio</div>
      <nav className="hidden lg:flex lg:flex-row text-black items-center md:justify-center flex-grow space-x-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/home" className="text-gray-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/user" className="text-gray-600">
              Service
            </Link>
          </li>
          <li>
            <Link href="/recordings" className="text-gray-600">
              Recordings
            </Link>
          </li>
          <li>
            <SignInButton />
          </li>
        </ul>
      </nav>
      <DropdownMenu>
              <DropdownMenuTrigger className="lg:hidden">
                <Menu color="black" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/">
                  <DropdownMenuItem className="text-red-700">Home</DropdownMenuItem>
                </Link>
                <Link href="/user">
                  <DropdownMenuItem className="text-red-700 ">Service</DropdownMenuItem>
                </Link>
                <Link href="/recordings">
                  <DropdownMenuItem className="text-red-700">Recordings</DropdownMenuItem>
                </Link>
                <Link href="/admin/dashboard">
                  <DropdownMenuItem className="text-red-700">
                    <Protect
                      permission="org:sys_profile:manage"
                      fallback={<p className="text-red-700">Only an Admin</p>}
                    >
                      <Button>Admin</Button>
                    </Protect>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
    </div>
  </header>
);

const HeroSection = () => (
  <section
    className="bg-cover bg-center h-96 relative"
    style={{ backgroundImage: "url(/two.jpeg)" }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="container mx-auto h-full flex flex-col justify-center items-start relative z-10">
      <h1 className="text-white text-5xl font-bold">Epistles of Christ</h1>
      <p className="text-white text-xl mt-4 max-w-lg">
        Our mission is raise dead christianity through the message of
        spirituality
      </p>
      <Button className="bg-blue-600 text-white py-2 px-4 rounded mt-6">
        Join Us
      </Button>
    </div>
  </section>
);

const AboutUs = () => (
  <section className="py-12">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold">
          We are Taking Small Steps to Make Earth Better Planet
        </h2>
        <p className="text-gray-700 mt-4">
          The World should grow in the word to make everyone live a spiritual
          life
        </p>
      </div>
      <div className="md:w-1/2">
        <Image src="/one.jpeg" alt="Church" width={500} height={300} />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 py-12 text-white">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
      <div>
        <h4 className="font-bold">About One Experience</h4>
        <p className="mt-4">
          One Experience is a church dedicated to spread the gosple through word
          and prayer
        </p>
      </div>
      <div>
        <h4 className="font-bold">Quick Links</h4>
        <ul className="mt-4 space-y-2">
          <li>
            <a href="#">Who We Are?</a>
          </li>
          <li>
            <a href="#">Support And FAQ's</a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold">Latest News</h4>
        <ul className="mt-4 space-y-2">
          <li>
            <a href="#">Giving Back - Uganda Training Centers</a>
          </li>
          <li>
            <a href="#">Spirit Of The Lord Is, From The New Life</a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold">Newsletter</h4>
        <p className="mt-4">
          Sign up for our weekly newsletter to stay updated on all news and
          events at One Experience.
        </p>
        <input
          type="email"
          className="mt-4 p-2 w-full"
          placeholder="Email Address"
        />
        <Button className="bg-blue-600 text-white py-2 px-4 rounded mt-2 w-full">
          Sign Up
        </Button>
      </div>
    </div>
    <div className="text-center mt-12">
      <p>© 2024 #OneExperience.</p>
    </div>
  </footer>
);

export default Home;
