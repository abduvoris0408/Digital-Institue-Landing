import { notFound } from "next/navigation"
import { coursesData } from "@/lib/course-data"
import CourseDetailPage from "@/components/course-detail"

interface CoursePageProps {
  params: {
    id: string
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = coursesData.find((c) => c.id === Number.parseInt(params.id))

  if (!course) {
    notFound()
  }

  return <CourseDetailPage course={course} />
}

export function generateStaticParams() {
  return coursesData.map((course) => ({
    id: course.id.toString(),
  }))
}
