package problems

import "testing"

func Test_mySqrt(t *testing.T) {
	type args struct {
		x int
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "Example1",
			args: args{
				x: 4,
			},
			want: 2,
		},
		{
			name: "Example2",
			args: args{
				x: 8,
			},
			want: 2,
		},
		{
			name: "Example3",
			args: args{
				x: 0,
			},
			want: 0,
		},
		{
			name: "Example4",
			args: args{
				x: 1,
			},
			want: 1,
		},
		{
			name: "Example5",
			args: args{
				x: 36,
			},
			want: 6,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := mySqrt(tt.args.x); got != tt.want {
				t.Errorf("mySqrt() = %v, want %v", got, tt.want)
			}
		})
	}
}
