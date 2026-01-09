export default function Footer() {
    return (
        <div className='footer text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', marginTop: '1.5rem', paddingBottom: '1rem', paddingTop: '0.5rem', textAlign: 'center' }}>
            &copy; {new Date().getFullYear()} Lorenzo Lunghi. All rights reserved.
        </div>
    )
}