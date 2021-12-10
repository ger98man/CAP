using my.PoC_Job as my from '../db/data-model';

service pocJob {
  entity Request1 as projection on my.Request1;
  entity Request2 as projection on my.Request2;
  
  action Job();
}