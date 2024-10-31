import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header title="Save your money" subtitle="Compare your options to make the best choice." />
      <section className="py-5">
          <div className="d-flex flex-row justify-content-center align-items-center">
            <Image src="/img/family-excursion.jpg" className="img-fluid rounded float-start"
             width={400} height={267} alt="Family excursion" style={{marginRight: '2em'}} />
            <div>
              <strong>Plan a day you won't forget</strong>
              <p>Know what your preferences are, and how you can make the most of them.</p>
              <Link href='/get-started'>
                <button className="btn btn-primary" style={{backgroundColor: '#44b', border: 'none'}}>Get Started</button>
              </Link>
            </div>
          </div>
      </section>
    </div>
  );
}
