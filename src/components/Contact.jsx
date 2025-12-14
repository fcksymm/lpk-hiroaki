export default function Contact() {
  return (
    <section className="section section-blue" id="contact">
      <div className="container" style={{ textAlign: 'center' }}>
        
        <h2 style={styles.title}>Daftar Sekarang</h2>
        <p style={styles.subtitle}>
          Tertarik kerja ke Jepang? Langsung daftar dan tanya-tanya via WhatsApp
        </p>

        <div style={styles.card}>
          <p style={styles.text}>
            📍 <strong>LPK Hiroaki Training Center</strong><br />
            Jl. Binuang No.30, Binuang Kp. Dalam<br />
            Kec. Pauh, Kota Padang, Sumatera Barat 25176
          </p>

          <div style={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.28856077062!2d100.41894837568812!3d-0.9336955353439012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b9cc0b25070f%3A0x4f4c07025ac201af!2sJl.%20Binuang%20No.30%2C%20Binuang%20Kp.%20Dalam%2C%20Kec.%20Pauh%2C%20Kota%20Padang%2C%20Sumatera%20Barat%2025176!5e0!3m2!1sid!2sid!4v1765723886202!5m2!1sid!2sid"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi LPK Hiroaki"
            ></iframe>
          </div>

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
  )
}

const styles = {
  title: {
    fontSize: '32px',
    marginBottom: '10px'
  },
  subtitle: {
    fontSize: '16px',
    marginBottom: '30px'
  },
  card: {
    maxWidth: '700px',
    margin: '0 auto',
    background: '#ffffff',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
  },
  text: {
    fontSize: '15px',
    lineHeight: '1.7',
    marginBottom: '20px'
  },
  mapWrapper: {
    marginBottom: '25px'
  },
  button: {
    display: 'inline-block',
    padding: '14px 32px',
    background: '#16a34a',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '999px',
    fontWeight: 'bold',
    fontSize: '16px'
  }
}
