const About = () => {
    return(
        <div className="about-gradient">
            <div className="content-card">
                <h1>About React Learning Hub</h1>
                <p>This platform is designed to provide an immersive learning experience for React developers of all levels. Whether you're just starting out or looking to master advanced concepts, we've got you covered.</p>
                
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem'}}>
                    <div className="component-card">
                        <h3>🎯 Mission</h3>
                        <p>To make React learning accessible, engaging, and practical for everyone.</p>
                    </div>
                    <div className="component-card">
                        <h3>🛠️ Technologies</h3>
                        <p>Built with React, Vite, Node.js, Express, and MongoDB for a complete full-stack experience.</p>
                    </div>
                    <div className="component-card">
                        <h3>📚 What You'll Learn</h3>
                        <p>Components, Props, State management, React Hooks, and modern development patterns.</p>
                    </div>
                    <div className="component-card">
                        <h3>👨‍💻 Community</h3>
                        <p>Join thousands of developers learning and growing together in the React ecosystem.</p>
                    </div>
                </div>
            </div>
        </div>
   );
}
export default About;