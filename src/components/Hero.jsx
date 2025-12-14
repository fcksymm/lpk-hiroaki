export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <img
          src="/logo.png"
          alt="LPK Hiroaki Training Center"
          style={styles.logo}
        />

        <p style={styles.tagline}>
          Lembaga Pelatihan Kerja Resmi <br />
          Persiapan Kerja ke Jepang
        </p>

        <a href="#contact" style={styles.button}>
          Daftar Sekarang
        </a>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    height: '90vh',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  overlay: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.55)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px'
  },
  logo: {
    width: '300px',
    marginBottom: '20px'
  },
  tagline: {
    fontSize: '18px',
    lineHeight: '1.6'
  },
  button: {
    marginTop: '25px',
    padding: '12px 30px',
    background: '#dc3545',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold'
  }
}
