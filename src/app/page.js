import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";

export default function Home() {
  return (
    <div>
      <Header title="Save your money" subtitle="Compare your options to make the best choice." />
      <section className="py-5">
          <div className="container">
            <strong>Plan a day you won't forget</strong>
            <p>Know what your preferences are, and how you can make the most of them.</p>
          </div>
      </section>
    </div>
  );
}
