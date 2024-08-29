import React from 'react'
import SearchFilter from './SearchFilter'
import './Navbar.css'
const Navbar = () => {
    const items= [
        'JavaScript', 'Python', 'Java', 'C++', 'C#', 'Ruby', 'PHP', 'Swift',
        'Go', 'Rust', 'TypeScript', 'Kotlin', 'Scala', 'R', 'Dart', 'Lua',
        'Perl', 'Haskell', 'SQL', 'HTML', 'CSS', 'Bash', 'PowerShell',
        'Assembly', 'COBOL', 'Fortran', 'MATLAB', 'Objective-C', 'VBA',
        'Groovy', 'Clojure', 'F#', 'Erlang', 'Elixir', 'Julia',
        'React', 'Angular', 'Vue.js', 'Next.js', 'Node.js', 'Express.js',
        'Django', 'Flask', 'Spring', 'ASP.NET', 'Ruby on Rails', 'Laravel',
        'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Scikit-learn',
        'Kubernetes', 'Docker', 'Git', 'AWS', 'Azure', 'Google Cloud',
        'MongoDB', 'PostgreSQL', 'MySQL', 'Oracle', 'SQLite',
        'GraphQL', 'RESTful API', 'WebSocket', 'WebAssembly',
        'Unity', 'Unreal Engine', 'OpenGL', 'Vulkan',
        'Hadoop', 'Spark', 'Kafka', 'Elasticsearch',
        'Xamarin', 'React Native', 'Flutter', 'Ionic',
        'Webpack', 'Babel', 'Sass', 'Less',
        'jQuery', 'Bootstrap', 'Tailwind CSS', 'Material-UI',
        'Redux', 'Vuex', 'RxJS', 'Lodash',
        'Jest', 'Mocha', 'Jasmine', 'Selenium',
        'Vim', 'Emacs', 'Visual Studio Code', 'IntelliJ IDEA'
    ];

    return (
      <div>
        <nav className="navbar">
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="#" className="navbar-link">Home</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Tutorials</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Exercises</a>
            </li>
            <li className='navbar-search'>
            <SearchFilter items={items} />
            </li>
          </ul>
        </nav>
        
      </div>
    );
}

export default Navbar
