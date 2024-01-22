import CategoryComponent from "../category-span/category.component";
import { ILeadsProps } from "./leads";
import { useLeadsStyles } from "./leads.style";

const LeadsComponent: React.FC<ILeadsProps> = ({
  children,
  title,
  tag,
  subTitle,
  description,
}) => {
  const classes = useLeadsStyles();
  return (
    <div className='row mt-60 pr-30'>
      <div className='col-md-6'>
        <div className={classes.leadTitle}>{title}</div>
      </div>
      <div className='col-md-6'>
        <div className='tag mb-4'>
          <CategoryComponent text={tag} />
        </div>
        <div className={classes.leadSubTitle}>
          <p>{subTitle}</p>
        </div>

        <div className={classes.leadDescription}>
          <p className='pb-25'>{description}</p>
          <div className='w-100'>{children}</div>
        </div>
      </div>
    </div>
  );
};
export default LeadsComponent;