function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
            <div className="container-custom section">
                {/* Hero Section */}
                <div className="text-center mb-16 animate-in">
                    <h1 className="text-5xl font-bold mb-4">
                        <span className="text-gradient-primary">TA Tryout System</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Platform tryout online dengan sistem proctoring berbasis Machine Learning
                    </p>
                </div>

                {/* Color Palette Preview */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Primary Colors */}
                    <div className="card animate-up">
                        <h3 className="card-header text-xl font-semibold">Primary Colors</h3>
                        <div className="grid grid-cols-5 gap-2">
                            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                                <div key={shade} className="flex flex-col items-center">
                                    <div
                                        className={`w-12 h-12 rounded-md shadow-soft bg-primary-${shade}`}
                                    />
                                    <span className="text-xs text-gray-500 mt-1">{shade}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-gray-600 mb-2">Base: #327498 (Teal Blue)</p>
                        </div>
                    </div>

                    {/* Secondary Colors */}
                    <div className="card animate-up" style={{ animationDelay: '0.1s' }}>
                        <h3 className="card-header text-xl font-semibold">Secondary Colors</h3>
                        <div className="grid grid-cols-5 gap-2">
                            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                                <div key={shade} className="flex flex-col items-center">
                                    <div
                                        className={`w-12 h-12 rounded-md shadow-soft bg-secondary-${shade}`}
                                    />
                                    <span className="text-xs text-gray-500 mt-1">{shade}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-gray-600 mb-2">Base: #F0A243 (Warm Orange)</p>
                        </div>
                    </div>
                </div>

                {/* Button Showcase */}
                <div className="card mb-12">
                    <h3 className="card-header text-xl font-semibold">Button Components</h3>
                    <div className="flex flex-wrap gap-4">
                        <button className="btn-primary">Primary Button</button>
                        <button className="btn-secondary">Secondary Button</button>
                        <button className="btn-outline">Outline Button</button>
                        <button className="btn-primary" disabled>
                            Disabled Button
                        </button>
                    </div>
                </div>

                {/* Typography Showcase */}
                <div className="card mb-12">
                    <h3 className="card-header text-xl font-semibold">Typography</h3>
                    <div className="space-y-4">
                        <div>
                            <h1>Heading 1 - Poppins Bold</h1>
                        </div>
                        <div>
                            <h2>Heading 2 - Poppins Semibold</h2>
                        </div>
                        <div>
                            <h3>Heading 3 - Poppins Semibold</h3>
                        </div>
                        <div>
                            <p className="font-normal">
                                Body text (Regular 400) - Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Poppins font provides excellent readability.
                            </p>
                        </div>
                        <div>
                            <p className="font-medium">
                                Medium weight (500) - Used for emphasized text and subheadings.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Semantic Colors */}
                <div className="card">
                    <h3 className="card-header text-xl font-semibold">Semantic Colors & Badges</h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="badge badge-primary">Primary</span>
                        <span className="badge badge-secondary">Secondary</span>
                        <span className="badge badge-success">Success</span>
                        <span className="badge badge-error">Error</span>
                        <span className="badge badge-warning">Warning</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;