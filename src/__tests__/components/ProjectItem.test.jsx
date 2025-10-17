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
    render(<ProjectItem data={mockProjectData} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  test('renders project title', () => {
    render(<ProjectItem data={mockProjectData} />);
    const title = screen.getByRole('heading', { name: /Test Project/i });
    expect(title).toBeInTheDocument();
  });

  test('renders project description', () => {
    render(<ProjectItem data={mockProjectData} />);
    expect(screen.getByText(/This is a test project description/i)).toBeInTheDocument();
  });

  test('renders project image with correct src', () => {
    render(<ProjectItem data={mockProjectData} />);
    const images = screen.getAllByRole('img');
    const projectImage = images.find(img => img.src.includes('/test.png'));
    expect(projectImage).toBeInTheDocument();
  });

  test('renders Live Demo link when siteURL is provided', () => {
    render(<ProjectItem data={mockProjectData} />);
    const liveLink = screen.getByText(/Live Demo/i).closest('a');
    expect(liveLink).toHaveAttribute('href', 'https://test.com');
    expect(liveLink).toHaveAttribute('target', 'blank');
  });

  test('does not render Live Demo link when siteURL is null', () => {
    render(<ProjectItem data={mockProjectDataWithoutSite} />);
    expect(screen.queryByText(/Live Demo/i)).not.toBeInTheDocument();
  });

  test('always renders Repo link', () => {
    render(<ProjectItem data={mockProjectData} />);
    const repoLink = screen.getByText(/Repo/i).closest('a');
    expect(repoLink).toHaveAttribute('href', 'https://github.com/test/repo');
  });

  test('renders tech stack images', () => {
    const { container } = render(<ProjectItem data={mockProjectData} />);
    const stackImages = container.querySelectorAll('.projStack');
    expect(stackImages.length).toBe(mockProjectData.stack.length);
  });

  test('applies reverse layout for IoT category', () => {
    const { container } = render(<ProjectItem data={mockProjectDataWithoutSite} />);
    const projectContainer = container.querySelector('.vendoReverse');
    expect(projectContainer).toBeInTheDocument();
  });

  test('does not apply reverse layout for web category', () => {
    const { container } = render(<ProjectItem data={mockProjectData} />);
    const projectContainer = container.querySelector('.vendoReverse');
    expect(projectContainer).not.toBeInTheDocument();
  });
});

