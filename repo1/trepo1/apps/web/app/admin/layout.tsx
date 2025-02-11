import AdminSideBar from "@repo/ui/admin"

export default function a ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  {
    return <div>
        <AdminSideBar></AdminSideBar>
        {children}
    </div>
}