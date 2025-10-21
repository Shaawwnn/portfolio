import { render, screen } from '@testing-library/react';
import Projects from '../../components/Projects';

// Mock the project data
jest.mock('../../projectData', () => [
  {
    title: "Test Project 1",
    img: "/test1.png",
    description: "First test project",
    siteURL: "https://test1.com",
    repoURL: "https://github.com/test/project1",
    category: "web",
    stack: ["react.png", "nodejs.png"]
  },
  {
    title: "Test Project 2",
    img: "/test2.png",
    description: "Second test project",
    siteURL: null,
    repoURL: "https://github.com/test/project2",
    category: "iot",
    stack: ["arduino1.png"]
  }
]);

describe('Projects Component', () => {
  test('renders Projects component without crashing', () => {
    render(<Projects />);
  });

  test('renders projects header', () => {
    render(<Projects />);
    expect(screen.getByText(/My_Projects/i)).toBeInTheDocument();
  });

  test('renders projects subtitle', () => {
    render(<Projects />);
    expect(screen.getByText(/A showcase of my recent work and creative solutions/i)).toBeInTheDocument();
  });

  test('renders all project items', () => {
    render(<Projects />);
    expect(screen.getAllByText(/Test Project 1/i)).toHaveLength(2); // One in overlay, one in main content
    expect(screen.getAllByText(/Test Project 2/i)).toHaveLength(2); // One in overlay, one in main content
  });

  test('renders project descriptions', () => {
    render(<Projects />);
    expect(screen.getAllByText(/First test project/i)).toHaveLength(2); // One in overlay, one in main content
    expect(screen.getAllByText(/Second test project/i)).toHaveLength(2); // One in overlay, one in main content
  });

  test('renders Live Demo link for projects with siteURL', () => {
    render(<Projects />);
    expect(screen.getByText(/Live Demo/i)).toBeInTheDocument();
  });

  test('renders View Code links for all projects', () => {
    render(<Projects />);
    const viewCodeLinks = screen.getAllByText(/View Code/i);
    expect(viewCodeLinks).toHaveLength(2);
  });

  test('renders category badges', () => {
    render(<Projects />);
    expect(screen.getByText(/Web App/i)).toBeInTheDocument();
    expect(screen.getByText(/IoT Project/i)).toBeInTheDocument();
  });

  test('renders tech stack for projects', () => {
    const { container } = render(<Projects />);
    const techImages = container.querySelectorAll('img[alt*="react"], img[alt*="nodejs"], img[alt*="arduino"]');
    expect(techImages.length).toBeGreaterThan(0);
  });

  test('renders project images', () => {
    const { container } = render(<Projects />);
    const projectImages = container.querySelectorAll('img[src*="/test"]');
    expect(projectImages).toHaveLength(2);
  });
});
