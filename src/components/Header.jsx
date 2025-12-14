export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <img
          src="/logo.png"
          alt="LPK Hiroaki Training Center"
          style={styles.logo}
        />
      </div>
    </header>
  )
}

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    zIndex: 1000
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '14px 20px',
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    height: '52px'
  }
}
