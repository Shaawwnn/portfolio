import { render, screen, fireEvent } from '@testing-library/react';
import TechStack from '../../components/TechStack';

describe('TechStack Component', () => {
  test('renders TechStack component', () => {
    render(<TechStack />);
  });

  test('renders the header with correct text', () => {
    render(<TechStack />);
    const header = screen.getByText(/Tech_Stack/i);
    expect(header).toBeInTheDocument();
  });

  test('renders the subtitle', () => {
    render(<TechStack />);
    const subtitle = screen.getByText(/Technologies and tools I work with to bring ideas to life/i);
    expect(subtitle).toBeInTheDocument();
  });

  test('renders category tabs', () => {
    render(<TechStack />);
    expect(screen.getByText(/All Technologies/i)).toBeInTheDocument();
    expect(screen.getByText(/Frontend/i)).toBeInTheDocument();
    expect(screen.getByText(/Backend/i)).toBeInTheDocument();
    expect(screen.getByText(/Tools & Others/i)).toBeInTheDocument();
  });

  test('renders tech items for All Technologies by default', () => {
    render(<TechStack />);
    // Should render HTML5, CSS3, JavaScript, etc.
    expect(screen.getByText(/HTML5/i)).toBeInTheDocument();
    expect(screen.getByText(/CSS3/i)).toBeInTheDocument();
    expect(screen.getByText(/JavaScript/i)).toBeInTheDocument();
  });

  test('switches to Frontend category when clicked', () => {
    render(<TechStack />);
    const frontendTab = screen.getByText(/Frontend/i);
    fireEvent.click(frontendTab);
    
    // Should show frontend technologies
    expect(screen.getByText(/HTML5/i)).toBeInTheDocument();
    expect(screen.getByText(/CSS3/i)).toBeInTheDocument();
    expect(screen.getByText(/React/i)).toBeInTheDocument();
    
    // Should not show backend technologies
    expect(screen.queryByText(/Node.js/i)).not.toBeInTheDocument();
  });

  test('switches to Backend category when clicked', () => {
    render(<TechStack />);
    const backendTab = screen.getByText(/Backend/i);
    fireEvent.click(backendTab);
    
    // Should show backend technologies
    expect(screen.getByText(/Node.js/i)).toBeInTheDocument();
    expect(screen.getByText(/Express/i)).toBeInTheDocument();
    expect(screen.getByText(/MongoDB/i)).toBeInTheDocument();
    
    // Should not show frontend technologies
    expect(screen.queryByText(/HTML5/i)).not.toBeInTheDocument();
  });

  test('switches to Tools & Others category when clicked', () => {
    render(<TechStack />);
    const toolsTab = screen.getByText(/Tools & Others/i);
    fireEvent.click(toolsTab);
    
    // Should show tools - be more specific with the regex to avoid matching GitHub Actions
    expect(screen.getByText(/^Git$/)).toBeInTheDocument(); // Exact match for Git
    expect(screen.getByText(/^GitHub$/)).toBeInTheDocument(); // Exact match for GitHub (not GitHub Actions)
    expect(screen.getByText(/Docker/i)).toBeInTheDocument();
    
    // Should not show frontend technologies
    expect(screen.queryByText(/HTML5/i)).not.toBeInTheDocument();
  });

  test('renders tech cards with proper structure', () => {
    const { container } = render(<TechStack />);
    const techCards = container.querySelectorAll('.techCard');
    expect(techCards.length).toBeGreaterThan(0);
  });

  test('renders tech icons', () => {
    const { container } = render(<TechStack />);
    const techIcons = container.querySelectorAll('.iconContainer img');
    expect(techIcons.length).toBeGreaterThan(0);
  });

  test('renders opening and closing tags in header', () => {
    const { container } = render(<TechStack />);
    const header = container.querySelector('.projectHeader');
    expect(header).toBeInTheDocument();
  });
});

