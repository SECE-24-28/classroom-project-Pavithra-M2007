const Home = () => {
    return (
        <div className="home-gradient">
            <div className="content-card">
                <h1>Welcome to React Learning Hub</h1>
                <p>Master React concepts through interactive examples and hands-on practice. Start your journey by logging in to access comprehensive tutorials and components.</p>
                
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '2rem'}}>
                    <div className="component-card">
                        <h3>🚀 Interactive Learning</h3>
                        <p>Learn React through practical examples and real-world scenarios.</p>
                    </div>
                    <div className="component-card">
                        <h3>📚 Comprehensive Content</h3>
                        <p>From basic components to advanced hooks - everything you need.</p>
                    </div>
                    <div className="component-card">
                        <h3>💡 Best Practices</h3>
                        <p>Industry-standard coding practices and modern React patterns.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;