     public static void main(String []args){
         
        int arr[] = new int[] {2, 3, 6, 10, 12, 14, 23, 25,29}; 
        System.out.println(ExtendedBottomUpCutRod(arr,6));
     }
     public void ExtendedBottomUpCutRod (int p[], int n){
         r = new int[]{0,1,2,3,4,5,6};
         s = new int[]{0,1,2,3,4,5,6};
         r[0] = 0;
         for (j = 1 ;j< n;j++){
             
             q = Integer.MIN_VALUE;
             for (i = 1;1< j;i++){
                 if (q < p[i] + r[j - i]) { //remembers most recent
                    q = p[i] + r[j - i];
                    s[j] = i;
                     
                 };
                r[j] = q;
                 
                 System.out.println("rn:"+ j) ;
                 System.out.println("r:"+ r[j] );
             };

     return r[n];
         
     }}