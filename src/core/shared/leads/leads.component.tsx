import CategoryComponent from "../category-span/category.component";
import { useLeads } from "./actions/leads.query";
import { ILeadsProps } from "./leads";
import { useLeadsStyles } from "./leads.style";

const LeadsComponent: React.FC<ILeadsProps> = ({children,i}) => {
  const classes = useLeadsStyles();
  const {data} = useLeads();    
  if (!data) {
    return <p>Loading...</p>
  }
  return (
    <div className='row mt-60 pr-30'>
      <div className='col-md-6'>
        <div className={classes.leadTitle}>{data[i].title}</div>
      </div>
      <div className='col-md-6'>
        <div className='tag mb-4'>
          <CategoryComponent text={data[i].tag} />
        </div>
        <div className={classes.leadSubTitle}>
          <p>{data[i].heading}</p>
        </div>

        <div className={classes.leadDescription}>
          <p className='pb-25'>{data[i]?.description}</p>
          <div className='w-100'>{children}</div>
        </div>
      </div>
    </div>
  );
};
export default LeadsComponent;