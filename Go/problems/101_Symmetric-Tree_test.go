package problems

import "testing"

func Test_isSymmetric(t *testing.T) {
	type args struct {
		root *TreeNode
	}
	tests := []struct {
		name string
		args args
		want bool
	}{
		{
			name: "Example1",
			args: args{
				root: &TreeNode{1,
					&TreeNode{2, &TreeNode{3, nil, nil}, &TreeNode{4, nil, nil}},
					&TreeNode{2, &TreeNode{4, nil, nil}, &TreeNode{3, nil, nil}},
				},
			},
			want: true,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := isSymmetric(tt.args.root); got != tt.want {
				t.Errorf("isSymmetric() = %v, want %v", got, tt.want)
			}
		})
	}
}
