import { render, screen } from '@testing-library/react';
import { Navbar } from '../../components/Navbar';

describe('Navbar Component', () => {
  test('renders Navbar component', () => {
    render(<Navbar />);
  });

  test('renders logo image', () => {
    render(<Navbar />);
    const logo = screen.getByAltText('');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/sasa.png');
  });

  test('renders CV download link with correct attributes', () => {
    render(<Navbar />);
    const cvLink = screen.getByText(/CV/i).closest('a');
    expect(cvLink).toHaveAttribute('href', '/ShawnAlberto_CV.pdf');
    expect(cvLink).toHaveAttribute('download');
  });

  test('renders home link', () => {
    const { container } = render(<Navbar />);
    const homeLink = container.querySelector('a[href="/"]');
    expect(homeLink).toBeInTheDocument();
  });

  test('renders DownloadIcon for CV', () => {
    const { container } = render(<Navbar />);
    const downloadIcon = container.querySelector('.MuiSvgIcon-root');
    expect(downloadIcon).toBeInTheDocument();
  });
});

