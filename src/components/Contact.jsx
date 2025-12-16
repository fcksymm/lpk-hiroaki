import { useEffect } from "react";

export default function Contact() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="section section-blue" id="contact">
      <div className="container" style={{ textAlign: "center" }}>

        <h2 style={styles.title}>Daftar Sekarang</h2>
        <p style={styles.subtitle}>
          Tertarik kerja ke Jepang?  
          Silakan isi formulir di bawah atau hubungi kami via WhatsApp.
        </p>

        <div style={styles.card}>

          {/* ALAMAT */}
          <p style={styles.text}>
            📍 <strong>LPK Hiroaki Training Center</strong><br />
            Jl. Binuang No.30, Binuang Kp. Dalam<br />
            Kec. Pauh, Kota Padang, Sumatera Barat 25176
          </p>

          {/* GOOGLE MAPS */}
          <div style={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.28856077062!2d100.41894837568812!3d-0.9336955353439012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b9cc0b25070f%3A0x4f4c07025ac201af!2sJl.%20Binuang%20No.30!5e0!3m2!1sid!2sid"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "12px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi LPK Hiroaki"
            />
          </div>

          {/* FORM TALLY */}
          <div style={{ marginBottom: "30px" }}>
            <iframe
  data-tally-src="https://tally.so/embed/ODaW7M?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
  loading="lazy"
  width="100%"
  style={{ border: 0, minHeight: '520px' }}
  title="Formulir Pendaftaran">
</iframe>

          </div>

          {/* BUTTON WHATSAPP */}
          <a
            href="https://wa.me/6281266790425?text=Halo%20LPK%20Hiroaki,%20saya%20ingin%20daftar%20program%20kerja%20ke%20Jepang."
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            📲 Daftar via WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}

const styles = {
  title: {
    fontSize: "32px",
    marginBottom: "10px",
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: "16px",
    marginBottom: "30px"
  },
  card: {
    maxWidth: "800px",
    margin: "0 auto",
    background: "#ffffff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.1)"
  },
  text: {
    fontSize: "15px",
    lineHeight: "1.7",
    marginBottom: "20px"
  },
  mapWrapper: {
    marginBottom: "30px"
  },
  button: {
    display: "inline-block",
    padding: "14px 36px",
    background: "#1e3a8a", // NAVY
    color: "#fff",
    textDecoration: "none",
    borderRadius: "999px",
    fontWeight: "bold",
    fontSize: "16px"
  }
};
