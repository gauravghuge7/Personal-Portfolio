import { Link } from "react-router-dom";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../Redux/Reducers/Reducer";
import "./Navbar.css";
import { education, experience, project, skill } from "../../services/information";



function Navbar() {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.mainSlice.darkMode);
    const [searchTerm, setSearchTerm] = useState('');
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [filteredResults, setFilteredResults] = useState([]);

    const toggleDarkMode = () => dispatch(toggleTheme());
    const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        if (term.trim() === '') {
            setFilteredResults([]);
            return;
        }

        const projectMatches = project.filter(project =>
            project.name.toLowerCase().includes(term) ||
            project.description?.toLowerCase().includes(term)
        );

        const experienceMatches = experience.flatMap(exp =>
            exp.project?.filter(p =>
            p.name.toLowerCase().includes(term) ||
            p.description?.toLowerCase().includes(term)
            ) || []
        );

        const educationMatches = education.filter(edu =>
            edu?.schoolName.toLowerCase().includes(term) ||
            edu?.degree?.toLowerCase().includes(term) ||
            edu?.major?.toLowerCase().includes(term)
        );

        const skillMatches = skill.filter(skill =>
            skill?.items?.filter(item => item.name.toLowerCase().includes(term))
        );

        setFilteredResults([
            ...projectMatches.map(p => ({ ...p, type: 'projects' })),
            ...experienceMatches.map(p => ({ ...p, type: 'experience' })),
            ...educationMatches.map(e => ({ ...e, type: 'education' })),
            ...skillMatches.map(s => ({ ...s, type: 'skills' }))
        ]);
    };



    return (
        <main>
            <nav className="fixed top-0 left-0 w-full h-14 sm:h-16 bg-surface text-fg shadow-lg z-50 px-2 sm:px-4 flex items-center justify-between gap-2">
                {/* Left - Logo & Menu Toggle */}
                <div className="flex items-center gap-2 flex-shrink-0 min-w-0">
                    <div className="lg:hidden">
                        <button onClick={toggleMobileMenu} className="text-fg text-2xl focus:outline-none p-1">
                            {showMobileMenu ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>

                    <Link to="/" className="text-lg sm:text-2xl font-semibold text-fg hover:text-accent transition truncate">
                        PORTFOLIO
                    </Link>
                </div>

                {/* Center - Search Bar (Hidden below sm) */}
                <div className="hidden sm:block relative flex-1 max-w-md mx-2 sm:mx-4">
                    <div className="flex items-center">
                        <input
                            type="search"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="w-full rounded-md px-2 sm:px-3 py-1.5 sm:py-2 bg-background-alt border border-border text-fg placeholder-muted text-sm focus:ring-2 focus:ring-accent outline-none"
                        />
                    </div>
                    {searchTerm && filteredResults.length > 0 && (
                        <div className="absolute top-full mt-1 left-0 right-0 bg-surface border border-border text-fg rounded shadow-lg z-50 max-h-64 overflow-y-auto">
                            {filteredResults.map((item, index) => (
                                <Link
                                    key={index}
                                    to={`/${item.type}`}
                                    onClick={() => setSearchTerm('')}
                                    className="block px-4 py-2 hover:bg-background-alt border-b border-border text-sm"
                                >
                                    <strong>{item.name}</strong>
                                    <p className="text-xs text-muted">{item.description?.slice(0, 60)}...</p>
                                    <span className="text-xs italic text-accent">({item.type})</span>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right - Theme Toggle & Desktop Menu */}
                <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                    <button
                        onClick={toggleDarkMode}
                        className="p-1.5 sm:p-2 rounded-full hover:bg-background-alt transition-colors"
                        aria-label="Toggle theme"
                    >
                        {darkMode ? <DarkModeIcon className="text-yellow-400 text-xl sm:text-2xl" /> : <LightModeIcon className="text-yellow-600 text-xl sm:text-2xl" />}
                    </button>

                    <ul className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm">
                        {["Experience", "Gallery", "Contact", "Information"].map((item) => (
                            <li key={item}>
                                <Link
                                    to={`/${item}`}
                                    className="relative group hover:text-accent transition"
                                >
                                    {item}
                                    <span className="absolute left-0 bottom-0 h-0.5 bg-accent w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile Nav Dropdown */}
            {showMobileMenu && (
                <div className="lg:hidden fixed top-14 sm:top-16 left-0 w-full bg-surface text-fg border-t border-border shadow-md flex flex-col items-center py-4 z-40">
                    {/* Mobile Search Bar (only needed below sm, where the inline bar is hidden) */}
                    <div className="sm:hidden relative w-full px-4 mb-4">
                        <input
                            type="search"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="w-full rounded-md px-3 py-2 bg-background-alt border border-border text-fg placeholder-muted text-sm focus:ring-2 focus:ring-accent outline-none"
                        />
                        {searchTerm && filteredResults.length > 0 && (
                            <div className="absolute top-full mt-1 left-4 right-4 bg-surface border border-border text-fg rounded shadow-lg z-50 max-h-64 overflow-y-auto">
                                {filteredResults.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={`/${item.type}`}
                                        onClick={() => {
                                            setSearchTerm('');
                                            setShowMobileMenu(false);
                                        }}
                                        className="block px-4 py-2 hover:bg-background-alt border-b border-border text-sm"
                                    >
                                        <strong>{item.name}</strong>
                                        <p className="text-xs text-muted">{item.description?.slice(0, 60)}...</p>
                                        <span className="text-xs italic text-accent">({item.type})</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    {["Experience", "Gallery", "Contact", "Information"].map((item) => (
                        <Link
                            key={item}
                            to={`/${item}`}
                            onClick={() => setShowMobileMenu(false)}
                            className="py-2 px-4 w-full text-center hover:bg-background-alt border-b border-border transition"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </main>
    );
}

export default Navbar;
