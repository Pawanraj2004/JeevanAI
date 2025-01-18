const Home = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', textAlign: 'center' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5em', color: '#004d40' }}>Welcome to Jeevan AI</h1>
        <p style={{ fontSize: '1.2em', color: '#555' }}>
          Your trusted companion for disease detection and diagnosis based on symptoms.
        </p>
      </header>

      <section style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '2em', color: '#004d40', marginBottom: '20px' }}>About Us</h2>
        <p style={{ fontSize: '1.1em', color: '#555', lineHeight: '1.6' }}>
          At Jeevan AI, we leverage advanced artificial intelligence technology to provide accurate and reliable 
          skin disease detection and symptom-based diagnosis. Our mission is to empower individuals with 
          accessible tools for early detection and proactive healthcare.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2em', color: '#004d40', marginBottom: '20px' }}>Features</h2>
        <ul style={{ listStyleType: 'none', padding: '0', color: '#333', fontSize: '1.1em' }}>
          <li style={{ marginBottom: '10px' }}>
            <strong>Detection of Skin Diseases:</strong> Upload images to receive insights and possible conditions.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Detection of Eye Diseases:</strong> Upload images to check your eyes condition.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Diagnosis Based on Symptoms:</strong> Enter symptoms to get a tailored diagnosis.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Interactive Sympom Checker:</strong> To procide knowledge about he parts of human body where the pain is felt.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Interactive Quiz:</strong> To educate about hygenic and healthy medical choices.
          </li>
        </ul>
      </section>

      

      
    </div>
  );
};

export default Home;
