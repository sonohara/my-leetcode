package problems

import "testing"

func Test_climbStairs(t *testing.T) {
	type args struct {
		n int
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "Example1",
			args: args{
				n: 2,
			},
			want: 2,
		},
		{
			name: "Example2",
			args: args{
				n: 3,
			},
			want: 3,
		},
		{
			name: "Test1",
			args: args{
				n: 1,
			},
			want: 1,
		},
		{
			name: "Test2",
			args: args{
				n: 4,
			},
			want: 5,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := climbStairs(tt.args.n); got != tt.want {
				t.Errorf("climbStairs() = %v, want %v", got, tt.want)
			}
		})
	}
}
