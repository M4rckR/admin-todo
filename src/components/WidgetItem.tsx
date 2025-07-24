type WidgetItemProps = {
    title: string;
    children: React.ReactNode;
}


export const WidgetItem = ({title, children}: WidgetItemProps) => {
  return (
    <>
      {/* TODO: src/components <WidgetItem /> */}
      <div className="md:col-span-2 lg:col-span-1">
        <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
         <p>{title}</p>
          {children}
        </div>
      </div>
      {/* TODO: Fin <WidgetItem /> */}
    </>
  );
};
