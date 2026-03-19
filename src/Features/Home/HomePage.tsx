import { Card, Typography} from 'antd';
import './Homepage.css';

const { Title, Paragraph } = Typography;

export default function HomePage() {
    return (
        <div className="homepage-container">
            <div className="hero-section">
                <Title level={1} className="hero-title">
                    Sistema de Gestión de Usuarios
                </Title>
                <Paragraph className="hero-subtitle">
                    Plataforma integral para la administración eficiente de usuarios y datos
                </Paragraph>
            </div>

            <div className="cta-section">
                <Card className="cta-card">
                    <Title level={3}>¿Listo para comenzar?</Title>
                    <Paragraph>
                        Utiliza el menú de navegación para acceder a las diferentes secciones del sistema
                    </Paragraph>
                </Card>
            </div>
        </div>
    )
}