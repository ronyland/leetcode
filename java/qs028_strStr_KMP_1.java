class Solution {
    public int strStr(String haystack, String needle) {
        if(needle.length() == 0) return 0;
        int p = 0;
        int q = 0;
        int[] nexts = kmp_table(needle);
        while(p < haystack.length()) {
            if(haystack.charAt(p) == needle.charAt(q)) {
                p++;
                q++;
                if(q == needle.length()) {
                    return p - q;
                }
            } else {
                q = nexts[q];
                if(q < 0) {
                    q = 0;
                    p++;
                }
            }
        }
        return -1;
    }
    private int[] kmp_table(String needle) {
        int p = 1;
        int q = 0;
        int[] nexts = new int[needle.length()];
        nexts[0] = -1;
        while(p < needle.length()) {
            if(needle.charAt(p) == needle.charAt(q)) {
                nexts[p] = nexts[q];
                p++;
                q++;
            } else {
                nexts[p] = q;
                while(q >= 0 && needle.charAt(p) != needle.charAt(q)) 
                    q = nexts[q];
                p++;
                q++;
            }
        }
        return nexts;

    }
}