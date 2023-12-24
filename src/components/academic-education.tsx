import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const courses: { title: string, url?: string }[] = [
    { title: 'Técnico em Manutenção e Suporte em Informática' },
    { title: 'Bacharelado em Sistemas de Informação' },
    { title: 'Tech Academy', url: 'https://lms.startse.com/certificado/v2/62e293e41aa0ba726fbb04c4?studentId=6268545e8ca05b167fe97256' },
    { title: 'NLW IA', url: 'https://app.rocketseat.com.br/certificates/72e22fc3-2ece-4493-9c7c-b42115e5ffeb' },
    { title: 'DISCOVERY', url: 'https://app.rocketseat.com.br/certificates/685f7ae7-8ddb-476c-b951-b841ee682d07' },
    { title: 'Curso de Java', url: 'https://app.rocketseat.com.br/certificates/ca2a50d5-d254-4a35-ae47-8442a8e07bc4' },
    { title:'Google Cloud Skills Boost', url: 'https://www.cloudskillsboost.google/public_profiles/a140dd45-bbeb-425c-a855-d641519ae273' }
]

export function AcademicEducation() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-extrabold text-primary">
                    FORMAÇÃO ACADÊMICA
                </CardTitle>
            </CardHeader>
            {
                courses.map(course => {
                    return (
                        <CardHeader key={course.title}>
                            <CardTitle>{course.title}</CardTitle>
                        </CardHeader>
                    )
                })
            }
        </Card>
    )
} 