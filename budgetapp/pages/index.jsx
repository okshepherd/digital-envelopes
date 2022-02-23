import Head from 'next/head'
import Image from 'next/image'
import s from '../styles/Home.module.scss'
import Link from 'next/link';
import Loader from '../components/Loader';

export default function Home() {
  return (




    
    <div>
      <Loader show/>


      <section class="hero">
        <div class="hero-body">
        
          <section className="container has-text-centered">
              <h1>Steward your resources with Digital Envelopes</h1>
              <button className={`button ${s.callToAction}`}>Get Started</button>

          </section>
        </div>

      </section>





    </div>
  )
}
