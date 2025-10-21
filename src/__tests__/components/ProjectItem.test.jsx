import { render, screen } from '@testing-library/react';
import ProjectItem from '../../components/ProjectItem';

const mockProjectData = {
  title: "Test Project",
  img: "/test.png",
  description: "This is a test project description",
  siteURL: "https://test.com",
  repoURL: "https://github.com/test/repo",
  category: "web",
  stack: ["react.png", "nodejs.png"]
};

const mockProjectDataWithoutSite = {
  title: "Test Project Without Site",
  img: "/test2.png",
  description: "Another test project",
  siteURL: null,
  repoURL: "https://github.com/test/repo2",
  category: "iot",
  stack: ["arduino1.png"]
};

describe('ProjectItem Component', () => {
  test('renders ProjectItem with project data', () => {
    render(<ProjectItem data={mockProjectData} index={0} />);
    expect(screen.getAllByText("Test Project")).toHaveLength(2); // One in overlay, one in main content
  });

  test('renders project title', () => {
    render(<ProjectItem data={mockProjectData} index={0} />);
    const titles = screen.getAllByRole('heading', { name: /Test Project/i });
    expect(titles).toHaveLength(2); // One h3 in overlay, one h2 in main content
  });

  test('renders project description', () => {
    render(<ProjectItem data={mockProjectData} index={0} />);
    expect(screen.getAllByText(/This is a test project description/i)).toHaveLength(2); // One in overlay, one in main content
  });

  test('renders project image with correct src', () => {
    render(<ProjectItem data={mockProjectData} index={0} />);
    const images = screen.getAllByRole('img');
    const projectImage = images.find(img => img.src.includes('/test.png'));
    expect(projectImage).toBeInTheDocument();
  });

  test('renders Live Demo link when siteURL is provided', () => {
    render(<ProjectItem data={mockProjectData} index={0} />);
    const liveLink = screen.getByText(/Live Demo/i).closest('a');
    expect(liveLink).toHaveAttribute('href', 'https://test.com');
    expect(liveLink).toHaveAttribute('target', '_blank');
  });

  test('does not render Live Demo link when siteURL is null', () => {
    render(<ProjectItem data={mockProjectDataWithoutSite} index={0} />);
    expect(screen.queryByText(/Live Demo/i)).not.toBeInTheDocument();
  });

  test('always renders View Code link', () => {
    render(<ProjectItem data={mockProjectData} index={0} />);
    const repoLink = screen.getByText(/View Code/i).closest('a');
    expect(repoLink).toHaveAttribute('href', 'https://github.com/test/repo');
    expect(repoLink).toHaveAttribute('target', '_blank');
  });

  test('renders tech stack images', () => {
    const { container } = render(<ProjectItem data={mockProjectData} index={0} />);
    const stackImages = container.querySelectorAll('img[alt*="react"], img[alt*="nodejs"]');
    expect(stackImages.length).toBe(mockProjectData.stack.length);
  });

  test('renders Web App category badge for web projects', () => {
    render(<ProjectItem data={mockProjectData} index={0} />);
    expect(screen.getByText(/Web App/i)).toBeInTheDocument();
  });

  test('renders IoT Project category badge for iot projects', () => {
    render(<ProjectItem data={mockProjectDataWithoutSite} index={0} />);
    expect(screen.getByText(/IoT Project/i)).toBeInTheDocument();
  });

  test('applies web class for web category', () => {
    const { container } = render(<ProjectItem data={mockProjectData} index={0} />);
    const projectCard = container.querySelector('.web');
    expect(projectCard).toBeInTheDocument();
  });

  test('applies iot class for iot category', () => {
    const { container } = render(<ProjectItem data={mockProjectDataWithoutSite} index={0} />);
    const projectCard = container.querySelector('.iot');
    expect(projectCard).toBeInTheDocument();
  });

  test('renders project card with proper structure', () => {
    const { container } = render(<ProjectItem data={mockProjectData} index={0} />);
    const projectCard = container.querySelector('.project-card');
    const projectImage = container.querySelector('.project-image');
    // Note: projectContent doesn't have a specific class name in the new structure
    
    expect(projectCard).toBeInTheDocument();
    expect(projectImage).toBeInTheDocument();
  });

  test('renders overlay content on hover', () => {
    const { container } = render(<ProjectItem data={mockProjectData} index={0} />);
    const overlay = container.querySelector('.overlay-content');
    expect(overlay).toBeInTheDocument();
  });
});

